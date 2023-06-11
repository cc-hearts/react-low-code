import { namespace } from "@/configs";
export function useNamespace(block?: string) {
  const cls = block ? `${namespace}-${block}` : namespace;
  const b = (block?:string) => block ? `${cls}-${block}` : cls
  const e = (element?: string) =>  element ?`${cls}__${element}` : cls
  const m = (modify?: string) => modify ? `${cls}--${modify}` : cls
  return { cls, b, e, m }
}