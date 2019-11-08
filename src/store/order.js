import {observable, computed, action} from 'mobx';

export default class{

    constructor(rootStore){
        this.rootStore = rootStore;
    } 	

	@observable formData = {
        name: {
            value: '',
            label: 'Name',
            validator: val => /^[aA-zZ ]{2,}$/.test(val),
            errorText: 'Use symboles',
            valid: null
        },
        phone: {
            value: '',
            label: 'Phone',
            validator: val => /^[0-9]{7,15}$/.test(val),
            errorText: '7 - 15 numbers',
            valid: null
        },
        email: {
            value: '',
            label: 'Email',
            validator: val => /^.+@.+$/.test(val),
            errorText: 'Add @',
            valid: null
        }		
	}

	@observable lastOrderCash = {
		name: '',
		email: '',
		phone: '',
		total: ''
	}

	@computed get formValid(){
		return Object.values(this.formData).every(field => field.valid);
	}

	@computed get data(){
		let data = {}

		for(let name in this.formData){
			data[name] = this.formData[name].value		
		}
		return data
	}

	@action change(key, value){
		let field = this.formData[key];
		field.value = value;
		field.valid = field.validator(field.value);
	}

	@action send(){
		return new Promise((resolve, reject) => {
			this.lastOrderCash.total = this.rootStore.cart.total
			for(let key in this.formData){
				this.lastOrderCash[key] = this.formData[key].value
			}
			this.rootStore.cart.clean().then(() => {
				resolve();
			})
		})
	}
};








