function updateObjectWithKeyAndValue(object, key, value)
{
   object[key]=value
   var newObject=Object.assign({},object)
   return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return obj
}
