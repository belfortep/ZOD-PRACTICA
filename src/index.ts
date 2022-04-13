import { z } from 'zod'   //zod al estar escrito en ts, no necesito el clasico @types
//z, objeto de zod para definir los datos

/*const nameSchema = z.string()
const numberSchema = z.number()
const booleanSchema = z.boolean()
const nullSchema = z.null()
const undefinedSchema = z.undefined()
const result = nameSchema.parse("")
//comparo lo que me manda el usuario con lo que defini

console.log(result)*/

const UserSchema = z.object({
    email: z.string().email(),
    fullname: z.string(),
    phone: z.number()
})

const AddressSchema = z.object({
    street: z.string(),
    city: z.string()
})

const personSchema = UserSchema.merge(AddressSchema)//uno ambos schema en mismo objeto

type UserType = z.infer<typeof UserSchema>
type PersonType = z.infer<typeof personSchema>

const UserInput: UserType = {
    email: "abc@gmail.com",
    fullname: "b",
    phone: 1
}


const result = UserSchema.parse({
    email: 'john@gmail.com',
    fullname: 'john',
    phone: 123123123,
    age: 12312  //si le paso un valor que no esta en el schema, lo ignora
})

const secondResult = UserSchema.parse(UserInput)

const person: PersonType = {
    fullname: "john johnson",
    city: "Los Angeles",
    email: "john@gmail.com",
    phone: 321321321,
    street: "street 321"
}

const anotherResult = personSchema.parse(person)
console.log(anotherResult);

const numbersArraySchema = z.array(z.number());

type numbersArraySchema = z.infer<typeof numbersArraySchema>

numbersArraySchema.parse([1, 2])


