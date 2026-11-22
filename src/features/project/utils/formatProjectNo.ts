// 案件番号を「No.00」の形にする
export function formatProjectNo(no: number) {
  return `No.${String(no).padStart(2, '0')}`
}
