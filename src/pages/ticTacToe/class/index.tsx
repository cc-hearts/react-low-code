/**
 * @author heart
 * @Date 2022-08-14
 * @description 井字棋游戏
 */
import type { MouseEventHandler } from 'react'
import React from 'react'
import './index.css'
interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>
  value: string | null
}

function Square(props: Props) {
  // 展示每一个格子是 O 是  X 还是 null
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

interface BoardProps {
  squares: Array<string | null>
  onClick: (arg: number) => void
}
// 九宫格棋盘 主要是为了展示组件用的 这种组件一般也称为ui层
class Board extends React.Component<BoardProps> {
  // 主要是抽离代码 减少代码的重复
  renderSquare(i: number) {
    // 之类我们使用了 <Square /> 这个组件 因此 Board 就相当于是它的父组件
    // 我们这里 就渲染了父组件的 squares（是一个长度为9的数组）的当中的一项 并且添加了点击的事件
    // (这里只是一项 并且只是为这一项添加了点击事件)
    // 因此下面将这个函数执行了9次 因此渲染了9项 也就是一个九宫格
    // this.props.onClick(i) 我们将点击这一项的下标值 传入给父组件 也就是下面的handleClick = (index: number) => {//...} 这个函数中
    // 因此这个函数可以通过index 获取到点击的是哪一个数组(因为i传过去就是数组的下标)
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => {
          // 这里我们做一个判断 如果当前的格子是 X 或者  O 则不能再点击这个格子啦
          if (this.props.squares[i] === 'X' || this.props.squares[i] === 'O') return
          this.props.onClick(i)
        }}
      />
    )
  }

  render(): React.ReactNode {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default class Game extends React.Component<
  Record<string, unknown>,
  {
    history: Array<{ squares: Array<string | null> }>
    stepNumber: number
    xIsNext: boolean
  }
> {
  // 类的构造函数
  constructor(props: Record<string, unknown>) {
    super(props)
    // 由于 需要实现  回到过去  的功能 我们就需要保存每次落子的时候的棋盘的数据 我们这里定义讲每次的状态都存储在名为history的变量中
    this.state = {
      history: [
        // 初始化就要有一个棋盘
        {
          squares: new Array(9).fill(null),
        },
      ],
      // 因为我们要判断 当前的是 X 还是 O 因此我们还需要一个变量去保存当前的步数
      // 保存步数是因为 下棋两个人交替下 总会有一个人是奇数 另一个人是偶数的情况

      // stepNumber主要用于保存当前的步数 因为可以回退 所以用stepNumber表示要展示的值
      stepNumber: 0,
      // 因此我们可以通过一个变量 xIsNext 每次落子的时候判断是true 还是 false 来表示不同的人下的棋(不止可以用boolean的形式 我们也可以用奇偶的方式判断是谁在下棋)
      xIsNext: true,
    }
  }

  // 这里用箭头函数 防止this丢失
  // index 参数就是点击的九宫格的的下标
  // 根据点击的九宫格的不同 设置状态 并且存储history中 history.slice(0, stepNumber + 1) 就是当前的棋盘的值 以及过去历史的值
  // 这里用historyArray变量接收
  handleClick = (index: number) => {
    const { history, xIsNext, stepNumber } = this.state
    // 因为slice 截取的是[0, index) 这种情况 我们要的是 0 到当前的步数的history值 因此要 slice(0,stepNumber + 1)
    // 这里要截取是因为我们回到了过去的棋盘 又重新下了 应该要覆盖后续的历史记录 因此我们要截取当前步数及以前的历史记录 存储下来
    const historyArray = history.slice(0, stepNumber + 1)
    // 则当前值 就是数组的最后一项 也就是stepNumber - 1的值
    const current = historyArray[historyArray.length - 1]
    // 如果胜利 则不会落子了
    if (calculateWinner(current.squares)) {
      return
    }
    //current.squares 是一个长度为9的数组
    console.log(current.squares)
    // 因此我们调用 slice 会将这个数组 浅拷贝一份
    // 如果我们直接修改 current.squares 的值 再将其存入到historyArray中 就会相当于是修改了同一份地址并且存入的(数组是引用类型)
    // 这样会影响到之前的historyArray的值 因此我们要将 这个数组浅拷贝一份(就是将原来的数据复制一份 换个地址 防止影响原来的数据)
    const squares = current.squares.slice()
    // console.log(squares === current.squares) // false 但是他们的数组每一项值现在都相等

    // 这里可以用xIsNext 判断当前是 X 还是 O 也可以使用 this.stepNumber % 2 === 0 的奇偶性判断是否是 'X' 还是 'O'
    squares[index] = xIsNext ? 'X' : 'O'
    // 将这个值插入到historyArray中 作为当前的棋盘数据
    historyArray.push({
      squares,
    })

    console.log(historyArray)
    this.setState({
      history: historyArray,
      // 因为要顺序交换下 true 为其中一个 false 为另外一个
      xIsNext: !xIsNext,
      // 因为我们下一步 就会往historyArray插入一条数据 historyArray的最后的一次值就是当前走的步数
      stepNumber: historyArray.length - 1,
    })
  }

  // 回到过去的方法
  jumpTo = (index: number) => {
    // index 表示的是回到过去的第几步 因此要赋值给 setNumber
    this.setState({
      stepNumber: index,
      xIsNext: index % 2 === 0,
    })
  }

  render(): React.ReactNode {
    const { history, xIsNext, stepNumber } = this.state
    // stepNumber 作为棋盘的当前的数据值
    const [current] = history.slice(stepNumber)

    const winner = calculateWinner(current.squares)
    return (
      <div>
        {/* 这里我们向子组件传入了两个参数 squares 代表的是九宫格当前的下棋的状态值 onClick是九宫格点击了哪一个格子回触发的回调函数 */}
        {/* Board 主要展示9宫格棋盘的作用 */}
        <Board squares={current.squares} onClick={this.handleClick} />

        <div>
          {/* 这里展示 当前落子的是哪一方 如果胜利 显示胜利方 */}
          {/* xIsNext 表示的下一个落子 如果胜利的话 显示当前的子就行 */}
          <div>{winner ? 'winner' + (xIsNext ? 'O' : 'X') : 'Next player:' + (xIsNext ? 'X' : 'O')}</div>
          {/* 这里要展示history的值 功能是可以回到过去 */}
          {history.map((step, move) => {
            // index === 0 的时候 展示 go to move start
            return (
              <div key={move}>
                <button onClick={() => this.jumpTo(move)}>{'Go to move ' + (move ? `#${move}` : 'start')}</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    // 结构出来 第一项 第二项 第三项的值
    const [a, b, c] = lines[i]
    // 然后比较 squares 那三个线能相等
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
