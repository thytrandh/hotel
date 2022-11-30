
import { Content, Footer, Header, Wrapper } from "./RoomCard.style";

export default function RoomCard({  
    title,
    className,
    header,
    content,
    children,
    footer, 
}) {
    return (
        <Wrapper style={{margin: "0 0 10px 0"}} className={className}>
            <Header>{
                header ? header : <h2>{title}</h2>}
            </Header>
            <Content>{content ? content : children}</Content>
            {footer && <Footer>{footer}</Footer>}
        </Wrapper>
    )
}