var Student = ()=>{
	var name = undefined;
	var age = undefined;
	var gender = undefined;

	return{
		getName: ()=>{
			return name;
		},
		setName:(x)=>{
			name = x;
		},
		getAge: ()=>{
			return age;
		},
		setAge: (x)=>{
			if(typeof(x) !== 'number'){
					console.log('Not a valid type. Please enter a number.');
			}else{
				age = x;
			}
		},
		getGender: ()=>{
			return gender;
		},
		setGender: (x)=>{
			gender = x;
		}
	}
};

emilyLau.getName();
emilyLau.setName("Emily Lau");
emilyLau.getAge();
emilyLau.setAge(5);
emilyLau.getGender();
emilyLau.setGender('F');