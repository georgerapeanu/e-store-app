export interface ProductCreate{
    name: string,
    description: string,
    publishDate: Date,
    price: number,
    weight: number,
    manufacturerId: number,
    color: string
}