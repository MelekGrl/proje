

export default function Menus({title,items}) {
    return (
        <div >
           <section>
            <nav className="grid gap-y-3 first:mt-4 ">
                <h6 className="text-lg text-primary-brand-color" >{title}</h6>
                <nav>
                    <ul className="flex gap-y-2 flex-col ">
                        {items.map((itemm,key)=>(
                            <li key={key}>
                                <a href="##" className="text-sm hover:text-brand-color"> {itemm.title}</a>
                            </li>
                        ))}
                        <li></li>
                    </ul>
                </nav>
            </nav>
           </section>
        </div>
    )
}
