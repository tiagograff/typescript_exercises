//função que cria o ID
function makeId():number{
    //1. verifica se o array está vazio, se estiver retorna 1
    //2. cria um novo array com os ids de user
    //3. separa os argumentos
    //4. encontrando o maior argumento (id) adciona + 1
    const newId:number = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    //retorna o valor final
    return newId;
}
//função que verifica o nome
function nameCall():string{
    const name = prompt('qual é o nome de quem você deseja registrar?')
    if(typeof name === 'string'){
        return name
    }else{
        alert('nome inválido: tipo de nome inválido')
        throw new Error('tipo de dado errado de nome');
    }
}

//função que verifica a idade
function ageCall():number{
    const age:number = Number(prompt('qual é a idade de quem você deseja registrar?'))
    if(!isNaN(age) && age > 0){
        return age
    }else{
        alert('número inválido: tipo de número inválido')
        throw new Error('tipo de dado errado da idade errado!');
        
    }
}

//função que verifica o nome
function streetCall():string{
    const street = prompt('qual é o rua de quem você deseja registrar?')
    if(typeof street === 'string'){
        return street
    }else{
        alert('rua inválido: tipo de rua inválido')
        throw new Error('tipo de dado da rua errado!');
    }
}

//função que verifica o nome
function cityCall():string{
    const city = prompt('qual é o cidade de quem você deseja registrar?')
    if(typeof city === 'string'){
        return city
    }else{
        alert('cidade inválido: tipo de cidade inválido')
        throw new Error('tipo de dado da cidade errado!');
    }
}

//função que chama a entrada e verificação do zipcode
const callZipcode = (): Zipcode =>{
    const input = prompt(`qual é o seu zipcode?`)
    const regex = /^[0-9]{5}(?:-[0-9]{4})?$/
    //testa se o tegex e o zipcode são do mesmo formato
    if (input && regex.test(input)){
        //retorna o zipcode
        return {code: input}
    }else{
        alert('zipcode inválido')
        throw new Error('zipcode inválido')
    }
}

//criando lista de usuários
const users: User[] = []
//ids usados
const usedIds: number[] = []
//criando o tipo code e zipcode 
type Code = string | RegExp
type Zipcode = {code: Code}
//interface de endereço
interface Address {
    street: string,
    city: string,
    zipcode: Zipcode
}
//interface do usuário
interface User {
    id: number,
    name: string,
    age: number,
    address: Address
}

function addNewUser(): User{
    const newUser: User = {
        id: makeId(),
        name: nameCall(),
        age: ageCall(),
        address: {
            street: streetCall(),
            city: cityCall(),
            zipcode: callZipcode()
        }
    }
    return newUser
}

//função principal
function main(){
    let ok: boolean = true
    while(ok){
        let questionUser: string = prompt('deseja adcionar um novo usuário? "sim" ou "não"?')
        if(questionUser === 'sim'){
            const newUser: User = addNewUser()
            users.push(newUser)
        }else if (questionUser === 'não'){
            ok = false
            alert('fechando o programa...')
        }else{
            alert('valor inválido, tente  novamente')
        }
    }
    if(users.length > 0){
        users.forEach((user)=>{
            alert(`registros:
nome: ${user.name}
idade: ${user.age}
endereço: ${user.address.street}, ${user.address.city} : ${user.address.zipcode.code}
id: ${user.id}`)
        })
    }
}

main()