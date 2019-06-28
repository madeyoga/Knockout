function AppViewModel() {
	this.firstName = ko.observable("Bert");
	this.lastName = ko.observable("Bertington");
	this.fullName = ko.computed( () => {
		return this.firstName() + " " + this.lastName();
	}, this);
	this.capitalizeLastName = () => {
		// get current lastName value.
		var currentLastName = this.lastName();

		// assign new value (capitalized last name) to lastName.
		this.lastName(currentLastName.toUpperCase());
	}
}

ko.applyBindings(new AppViewModel());