/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */

// fungsi untuk format mata uang (rupiah)
export const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number)
}

// fungsi untuk mendapatkan value warna
export const getUniqueValues = (data, type) => {
    let unique = data.map((item)=> item[type])
    if(type === 'colors')
    {
        unique = unique.flat()
    }
    return ['all',...new Set(unique)]
}
