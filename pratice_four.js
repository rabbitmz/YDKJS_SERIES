function main() 
{
    var mark = {
        fullName: 'Mark Marker', 
        mass: 100,
        height: 75,
        calcBmi: function () {
           this.bmi = this.mass / (this.height * this.height);
           return this.bmi;
        }
    };

    var john = {
        fullName: 'John Johnner',
        mass: 75, 
        height: 85, 
        calcBmi:  function () {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    };

    mark.calcBmi();
    john.calcBmi();

    if(mark.bmi >  john.bmi) {
        console.log(mark.fullName + " with higher BMI. A value of "+mark.bmi);
    }
    else if(mark.bmi < john.bmi) {
        console.log(john.fullName + " with higher BMI. A value of "+john.bmi);
    }
    else {
        console.log("Their are the same");
    }

}
main();