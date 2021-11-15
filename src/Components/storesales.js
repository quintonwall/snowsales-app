import { PinboardEmbed } from "@thoughtspot/visual-embed-sdk";



function RenderLiveboard(props) {
    return <PinboardEmbed frameParams={{height: "80vw"}} pinboardId={"e4968d70-1c03-4ca4-8081-894a3a0301c1"}/>
}
/* try.thoughtspot pin: 41dd8d51-83ad-47ae-bbd1-801439319b0e */
/* internal cluster pin: e4968d70-1c03-4ca4-8081-894a3a0301c1 */ 

export default function StoreSales() {
    return (
        <div>
            <h1>Store Sales</h1>
            <PinboardEmbed frameParams={{height: "80vw"}} 
                        pinboardId={"41dd8d51-83ad-47ae-bbd1-801439319b0e"}/>
        </div>
            
    );
}