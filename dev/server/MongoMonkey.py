import pymongo

class MongoMonkey: 
   def __init__(self, dbname, cname=None):
       self._conn = pymongo.MongoClient("localhost", 27017)
       self._db  = self._conn[dbname]
       if cname is not None:
           self._collection = self._db[cname]

   #returns a new collection
   #todo: write logs
   def set_collection(self, cname):
       self._collection = self._db[cname]
       return self._collection
   
   def insert(self, doc, cname=None):
       self._collection.insert(doc)
    
   def spawn_collection_dict(self, cname):
       if not cname:
           print "collection name not defined"
           return None
       raw = self.spawn_collection(cname)
       items = [x for x in raw.find()[0:5]]
       return items

   #take everything in a collection. rrun a find() return
   def save_collection(self, collection, cname):
       if not collection or not cname:
           return false
       db_collection = self.spawn_collection(cname)
       for item in collection:
           db_collection.save({item: collection[item]})
   def save_entry_to_collection(self, entry, collection):
       pass

if __name__ == '__main__':
    # you want to initialize the class
    database   = MongoDB("nfl")

    collection_wanted = database.spawn_collection("playdata")
    print isinstance(collection_wanted.find_one(), dict)

