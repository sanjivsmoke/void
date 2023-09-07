"use client";
import {Accordion, AccordionItem} from "@nextui-org/react";

 const FooterComponent =()=>{

const defaultContent = "hai";
// const Title = ;
    return(
<div>
<Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" subtitle="To Know More" title={" - MR. プリンス"}>
        {defaultContent}
      </AccordionItem>   
    </Accordion>
</div>
    )
}
export default FooterComponent;