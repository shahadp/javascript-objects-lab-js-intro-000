function updateObjectWithKeyAndValue(object, key, value)
{
   object[key]=value
   var newObject=Object.assign({},object)
   return newObject
}
