
function person(id,name,age,city,height,weight){
var self = this, prevObj = null;
  self.id = id || 0; //key auto-gen not changes
  self.name = ko.observable(name);
  self.age =  ko.observable(age);
  self.city =  ko.observable(city);
  self.height =  ko.observable(height);
  self.weight =  ko.observable(weight);
  self.editMode = ko.observable(0);
  self.showAddItem = ko.observable(0);
  
  self.editRecord = function(record){
	self.editMode(1);
	prevObj = new person(0,record.name(),record.age(),record.city(),record.height(),record.weight());
	//console.log(prevObj);
  }; 
  //update is automatic - self observable
  self.updateRecord = function(record){
	//console.log(self.id);
	self.editMode(0);
	prevObj = null;
	var obj = {ID:record.id,name:record.name(),age:record.age(),city:record.city(),height:record.height(),weight:record.weight()};
	db.updateRecord(storeName,obj,function(e){
		notify("record updated with key: "+e);
	});
  };
  self.cancelUpdate = function(){
	self.editMode(0);
	if(prevObj !== null)
	{
		self.name(prevObj.name());
		self.age(prevObj.age());
		self.city(prevObj.city());
		self.height(prevObj.height());
		self.weight(prevObj.weight());
		prevObj = null;
	}
  };  
  self.cancelAdd = function(){
	//self.editMode(0); //not required, since instances are diff.
	self.showAddItem(0);
	self.name('');
	self.age('');
	self.city('');
	self.height('');
	self.weight(''); 
  };
}

function PersonViewModel(){
  var self = this; 
  self.dbRecords = ko.observableArray([]);
  self.newItem = ko.observable(new person());
  self.singleId = ko.observable();

  self.invokeAdd = function(){
	self.newItem().showAddItem(1);
  }; 
  self.fillRecords = function(records){
	ko.utils.arrayPushAll(self.dbRecords(),records);
  };
  self.addRecord = function(record){
	var newRec = {name:record.name(),age:record.age(),city:record.city(),height:record.height(),weight:record.weight()};
	db.addSingleRecord(storeName, newRec, function(e){
		notify("New record key: " + e);
		record.id = e;
		self.dbRecords.push(record);
		self.newItem(new person());	
	});	
  };
  self.deleteRecord = function(record){
	db.removeRecord(storeName, record.id, function(e){
		notify("Deleted record with key: "+e);
		self.dbRecords.remove(record); 
	});
  };
  self.showAll = function(){
  	db.getAllRecords(storeName, function(data){
		notify("All records");
		self.dbRecords.removeAll();
		data.forEach(function(item){ self.dbRecords.push(new person(item.ID,item.name,item.age,item.city,item.height,item.weight)); });
	});
  };
  self.showCount = function(){
		db.getCount(storeName, function(e){
		notify("Records count in DB: "+e);
	});
  };
  self.clearItems = function(){
		db.clearRecords(storeName, function(e){
		notify(e);
		self.dbRecords.removeAll();
	});
  };
  self.showSingle = function(){ 
  	if(self.dbRecords().length > 0){	
  		var id = self.singleId() != null ? self.singleId().id : self.dbRecords[0].id; 
		db.getSingleRecord(storeName, id, function(data){
			notify("Single record with key: " + id);
			self.dbRecords.removeAll();
			self.dbRecords.push(new person(data.ID,data.name,data.age,data.city,data.height,data.weight));	
		});
	}
  };
  //db.addRecords() not used here (for bulk add)
}

//-----------------
var dbName = "personDB", storeName = "people", dbVersion = 1, db = window.psGlobal;

window.onload = function(){
	//db.enableErrorLog = false;
	db.openDB(dbName,dbVersion,storeName,openDBSuccess);	
};

function notify(e){
	var str = JSON.stringify(e);
	var obj = document.querySelector(".notifier");
	obj.innerHTML = str;
}
//-------------------
function openDBSuccess(e){
	notify(e);
	db.getAllRecords(storeName,successGet);
}
function successGet(data){	
	var output = [];
	data.forEach(function(item){ output.push(new person(item.ID,item.name,item.age,item.city,item.height,item.weight)); });
	var model = new PersonViewModel();
	model.fillRecords(output);
	ko.applyBindings(model);
}
