export default <Fx extends Function>(fx: Fx) => <T>(data: T) => {
  fx(data)
  return data
}