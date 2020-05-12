export const reais = (price) => {
  return `R$ ${price.toFixed(2)}`.replace('.', ',')
}