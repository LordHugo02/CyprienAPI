
const chars = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0","1","2","3","4","5","6","7","8","9"
]

function generateToken(){
    let str = ""
    let base = new Date().getTime().toString()
    while(base != ""){
        let temp = base.substring(base.length - 2)
        base = base.substring(0, base.length - 2)
        if(parseInt(temp) >= chars.length){
            base += temp[0]
            temp = temp[1]
        }
        str = chars[parseInt(temp)] + str
    }
    return str
}
export {
    generateToken
}