export const metadata={
    title : 'Badou - Thrift Clothes',
    desription: 'An Online Store to thrift clothes',
}

export default function ThriftStoreLayout ({children}){
return(
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">

        <div className="Flex flex-wrap p-2 justify-center">
            {children}
        </div>

    </div>

)
}