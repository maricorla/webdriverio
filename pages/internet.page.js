class Internet{
    get pageHeader(){return $('h1.heading')}
    get subHeading(){return $('h2')}
    get pageFooter(){return $('#page-footer')}
    get parent(){return $('ul')}
    get childElements() {return this.parent.$$('li')}
    get h3Header(){return $('h3')}

    specificChildElement(index) { 
        return this.parent.$(`li:nth-child(${index})`)
    } //

    getLink(index){return this.specificChildElement(index).$(`a`)} 

    checkbox(index){return $(`#checkboxes input:nth-child(${index})`)}

    tapCheckBox(index){
        this.checkbox(index).waitForDisplayed()
       this.checkbox(index).click()
    }

    getLiText(){
        this.childElements.filter((element)=>{
            console.log(element.getText())
        })
    }
    getSpecificElementText(index){
        this.specificChildElement(index).waitForDisplayed()
       return this.specificChildElement(index).getText()
    }

    clickOnLink(index){
        if(this.getLink(index).isDisplayed() === true){
            this.getLink(index).click()      
    }
        this.h3Header.waitForDisplayed()
    }

   

}
module.exports = new Internet()