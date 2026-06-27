import { HomePageContext } from "../context/HomePageContext";

export default function ProductCategory() {
  const productCategory = HomePageContext().productCategory;

  return (
    <section className="flex flex-col justify-center items-center text-center my-20">
      <div className="w-full md:w-2/3 lg:w-3/5 mb-10">
        <h1 className="font-(--font-headline)">{ productCategory.title }</h1>
        <p className="text-(--neutral-color) text-center">{ productCategory.content }</p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-3 justify-self-center">
          { productCategory.productList.map((data, index) => (
            <div key={ index } className={`bg-(${ data.color })/50 rounded-lg flex items-center gap-x-1 p-3 border-b-3 border-(${ data.color })`}>
              <div className="w-12">
                <img src={ data.image } alt={ data.name } />
              </div>
              <div>
                <h4 className="font-(--font-headline) text-(--neutral-color)">{ data.name }</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}