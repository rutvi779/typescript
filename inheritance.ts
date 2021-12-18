class BasicCalc{
    public result:number=0;
    constructor(){
        this.result=0;
    }

    public add(a:number,b:number):void{
        this.result=a+b;
        console.log(this.result)
    }
}

class AdvCalc extends BasicCalc{
    constructor(){
        super();
    }

     public add(a:number,b:number):void{
        this.result=a+b+a+b;
        console.log(this.result)
    }

}

let advCalc = new AdvCalc()
advCalc.add(10,20)
