function AppViewModel() {
	this.firstName = ko.observable("Bert");
	this.lastName = ko.observable("Bertington");
	this.fullName = ko.computed( () => {
		return this.firstName() + " " + this.lastName();
	}, this);
}

ko.applyBindings(new AppViewModel());