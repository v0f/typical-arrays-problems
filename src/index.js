
exports.min = function min (array) {
  if( array === undefined || array.length === 0 )
    return 0;
  return array.reduce( (_min, x) => _min < x ? _min : x )
}

exports.max = function max (array) {
  if( array === undefined || array.length === 0 )
    return 0;
  return array.reduce( (_max, x) => _max > x ? _max : x )
}

exports.avg = function avg (array) {
  if( array === undefined || array.length === 0 )
    return 0;
  return array.reduce( (_sum, x) => _sum + x ) / array.length
}
