import '@/assets/scss/designer/empty/empty.scss'
export const LeftEmpty = () => {
  return  <svg viewBox="0 0 1024 1024" style={{width:'240px',height:'240px'}}>
  <rect id="helper-drag-leftrec" width="260" height="600" fill="#eeeeee" stroke="none" fillRule="evenodd" rx="12"
    transform="translate(97.4763,336) translate(-27.4763,-124)"></rect>
  <rect id="helper-drag-rightrec" width="580" height="600" fill="#eeeeee" stroke="none" fillRule="evenodd" rx="12"
    transform="translate(443.476,336) translate(-69.5,-124)"></rect>
  <rect id="helper-drag-rec" width="210" height="100" fill="#ffffff" rx="10" stroke="none"     style={
      {
        transform: 'translate(-111.034px,-48.1565px)',
        animation:'3.3s linear infinite both helper-drag-rec_w, 3.3s linear infinite both helper-drag-rec_h, 3.3s linear infinite both helper-drag-rec_mo',
        'offsetPath': "path('M206.034,298.157L205.034,298.157C481.262,280.399,662.717,480.353,670.01,510.157L505.01,280.552L515.01,290.157L515.01,290.157')",
        'offsetRotate': '0deg'
      }
    }>
  </rect>
  <g id="helper-drag-mouse" fill="#000000" fillRule="nonzero" opacity="1"
    style={{
      transform: 'scale(2,2) translate(-14px,-14px)',
      animation: '3.3s linear infinite both helper-drag-mouse_mo',
      offsetPath:" path('M200,613L200,290L200,300L200,300C371.375,309.667,501.439,327.173,663.976,512L663.976,512')",
      offsetRotate: '0deg'
    }}>
    <path id="helper-drag-mouse-path"
      d="M27.9059,13.8023L23.4402,10.278C23.364,10.218,23.2602,10.2069,23.173,10.2494C23.0858,10.2919,23.0305,10.3805,23.0308,10.4775L23.0308,12.7418L15.2614,12.7418L15.2614,4.9723L17.5292,4.9723C17.7392,4.9723,17.8582,4.72732,17.7287,4.56283L14.201,0.0971035C14.1537,0.0358608,14.0806,0,14.0032,0C13.9258,0,13.8528,0.0358608,13.8055,0.0971035L10.2778,4.56283C10.2178,4.63907,10.2067,4.74288,10.2492,4.83009C10.2917,4.91729,10.3803,4.97254,10.4773,4.9723L12.7416,4.9723L12.7416,12.7418L4.97221,12.7418L4.97221,10.474C4.97221,10.264,4.72723,10.145,4.56274,10.2745L0.0971017,13.8023C0.0358601,13.8496,0,13.9226,0,14C0,14.0774,0.0358601,14.1504,0.0971017,14.1977L4.55924,17.7255C4.72373,17.855,4.96871,17.7395,4.96871,17.526L4.96871,15.2617L12.7381,15.2617L12.7381,23.0312L10.4703,23.0312C10.2603,23.0312,10.1413,23.2762,10.2708,23.4407L13.7985,27.9029C13.9,28.0324,14.096,28.0324,14.194,27.9029L17.7217,23.4407C17.8512,23.2762,17.7357,23.0312,17.5222,23.0312L15.2614,23.0312L15.2614,15.2617L23.0308,15.2617L23.0308,17.5295C23.0308,17.7395,23.2757,17.8585,23.4402,17.729L27.9024,14.2012C27.9634,14.1533,27.9993,14.0802,28,14.0026C28.0007,13.925,27.966,13.8513,27.9059,13.8023L27.9059,13.8023Z"
      transform="translate(14,14) translate(-14,-14)"></path>
  </g>
  <g id="helper-drag-boomrightup" opacity="0" transform="translate(985.577,207.1) scale(1.3,1.3) translate(-13,-13)"
    style={{animation: '3.3s linear infinite both helper-drag-boomrightup_o' }}>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a0_d' }}></path>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a1_d'}}></path>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a2_d'}}></path>
  </g>
  <g id="helper-drag-boomleftup" opacity="0"
    transform="translate(367.253,188.323) rotate(-90) scale(1.3,1.3) translate(-13,-13)"
    style={{ animation: '3.3s linear infinite both helper-drag-boomleftup_o' }}>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a3_d' }}></path>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a4_d' }}></path>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a5_d' }}></path>
  </g>
  <g id="helper-drag-boomrightbottom" opacity="0"
    transform="translate(960.3,845.127) rotate(90) scale(1.3,1.3) translate(-13,-13)"
    style={{ animation: '3.3s linear infinite both helper-drag-boomrightbottom_o' }}>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)"
      style={{ animation:'3.3s linear infinite both a6_d' }}></path>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a7_d' }}></path>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a8_d' }}></path>
  </g>
  <g id="helper-drag-boomleftbottom" opacity="0"
    transform="translate(335.477,819.85) rotate(-180) scale(1.3,1.3) translate(-13,-13)"
    style={{ animation: '3.3s linear infinite both helper-drag-boomleftbottom_o' }}>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a9_d' }}></path>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) rotate(45) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a10_d' }}></path>
    <path fill="#b6b6b6" opacity="1" stroke="none"
      d="M1,0L3,0C3.55228,0,4,0.447715,4,1L4,3C4,3.55228,3.55228,4,3,4L1,4C0.447715,4,0,3.55228,0,3L0,1C0,0.447715,0.447715,0,1,0Z"
      transform="translate(-15.4435,22) rotate(90) scale(2,2) translate(-2,-14)"
      style={{ animation: '3.3s linear infinite both a11_d' }}></path>
  </g>
</svg>
}