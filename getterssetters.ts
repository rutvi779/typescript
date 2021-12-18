class Mobile{
    private brand:string;
    private color:string;
    private price:number;

    constructor(brand:string,color:string,price:number){
        this.brand=brand;
        this.color=color;
        this.price=price;
    }

    public getBrand():string{
        return this.brand;

    public setBrand(brand:string):void{
        this.brand=brand;
    }

}



let mobile=new Mobile('Apple','Silver',35000);
console.log(mobile.getBrand())
mobile.setBrand('lenovo')
console.log(mobile)
