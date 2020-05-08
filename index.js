function updateObjectWithKeyAndValue(object, key, value)
{
   var newObject=object.assign(object,{key:value})
   return newObject
}
