# Set 集合

**Set用于存放不重复的数据**
**注意：集合没有下标**

**1. 如何创建set集合？**
  ```js
  new Set();//创建一个没有内容的set集合

  new Set(iterable);//创建一个具有初始内容的Set集合，内容来自iterable(可迭代对象)每次迭代的结果
  ```
**2. Set实例方法：**

  ## Set.prototype.add(value)
    在Set对象尾部添加一个元素。返回该Set对象。

  ## Set.prototype.delete(value)
    移除Set中与这个值相等的元素，（即如果删除成功，返回true，否则返回false）。

  ## Set.prototype.clear()
    移除Set对象内的所有元素。

  ## Set.prototype.has(value)
    是否含有value值，返回boolean值

  ## Set.prototype.forEach(function(item,index,self){...})
    因为Set集合没有下标，使用forEach遍历Set结合时，index的值为item

  ## Set.prototype.keys() (en-US)
    与values()方法相同，返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。

  ## Set.prototype.values()
    返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
    
  ## Set.prototype.entries()
    返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值的[value, value]数组。
    为了使这个方法和Map对象保持相似， 每个值的键和值相等。

  ## Set.prototype[@@iterator]()
    返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。

**3. 实例属性**

  ## Set.prototype.size
   返回 Set 对象中的值的个数

  ## get Set[@@species]
  构造函数用来创建派生对象.