import {MouseEvent, useRef} from 'react';
import {
    ButtonStyled, RippleStyled, AStyled,
} from './button.styled.ts';

type ButtonVariantType = 'a' | 'button' | 'div';

export type TitlePropsType = {
    text: string,
    onClick: () => void,
    variant?: ButtonVariantType,
    href?: string,
}

export interface CoordinatesType {
    x: number,
    y: number
}

export const Button = ({text, onClick, variant = 'button', href = ''}: TitlePropsType) => {
    //const [circles, setCircles] = useState<Array<number>>([]);
    //const [isShow, setIsShow] = useState<boolean>(false);
    //const [coordinates, setCoordinates] = useState<CoordinatesType>({x: 0, y: 0});
    const rippleRef = useRef<HTMLDivElement>(null);
    //const circleRef = useRef<HTMLDivElement>(null);

    //const arr = useMemo(() => ([...circles]), [circles]);

    // const deleteFirstCircle = useCallback(() => {
    //     circles.shift();
    //     setCircles(circles);
    // }, [circles])

    // const onClickHandler = useCallback((e: MouseEvent) => {
    //     //setIsShow(true);
    //     //const arr = [...circles];
    //     if (circles.length === 0) {
    //         circles.push(0);
    //     } else {
    //         circles.push(circles[circles.length - 1] + 1);
    //     }
    //
    //     setCircles(circles);
    //
    //     if (rippleRef.current) {
    //         const clickCoordinates = {
    //             x: e.pageX - rippleRef.current.getBoundingClientRect().x,
    //             y: e.pageY - rippleRef.current.getBoundingClientRect().y,
    //         };
    //         setCoordinates(clickCoordinates)
    //     }
    //
    //     setTimeout(deleteFirstCircle, 250);
    //
    //     onClick();
    // }, [circles, deleteFirstCircle, onClick])

    const createRipple = (x: number, y: number) => {
        // const style = {
        //     width: '1px',
        //     height: '1px',
        //     position: 'absolute',
        //     background: 'rgba(grey, 0.8)',
        //     border: '1px solid transparent',
        //     borderRadius: '50%',
        //     pointerEvents: 'none',
        //     animation: 'ripple 0.75s 1',
        //     top: `${y}px`,
        //     left: `${x}px`,
        // };
        //const circle = `<div style={${style}} ref={${circleRef}}></div>`;
        const circle = document.createElement("div");
        //circle.className = `width:1px;height:1px;position:absolute;top:${y}px;left:${x}px;background:rgba(grey, 0.8);border:1px solid transparent;borderRadius:50%;pointerEvents:none;animation:ripple 0.75s 1;`;
        circle.style.width = '1px';
        circle.style.height = '1px';
        circle.style.position = 'absolute';
        circle.style.top = `${y}px`;
        circle.style.left = `${x}px`;
        circle.style.zIndex = '2';
        circle.style.background = 'rgba(black, 0.8)';
        circle.style.border = '1px solid transparent';
        circle.style.borderRadius = '50%';
        circle.style.pointerEvents = 'none';
        circle.style.animation = 'ripple 0.75s 1';

        if (rippleRef.current) {
            rippleRef.current.append(circle);
            // setTimeout(() => {
            //         circle.remove();
            // }, 3000);
        }
    }

    const onClickHandler = (e: MouseEvent) => {
        if (rippleRef.current) {
            const clickCoordinates = {
                x: e.pageX - rippleRef.current.getBoundingClientRect().x,
                y: e.pageY - rippleRef.current.getBoundingClientRect().y,
            };

            createRipple(clickCoordinates.x, clickCoordinates.y);
        }

        onClick();
    }


    return (
        <>
            {variant === 'button'
                ? <ButtonStyled onClick={(e) => onClickHandler(e)}>
                    <RippleStyled ref={rippleRef}>
                        {/*{isShow && <CircleStyled x={coordinates.x} y={coordinates.y}/>}*/}
                        {/*{circles.length*/}
                        {/*    ? circles.map(circle => <>*/}
                        {/*        <CircleStyled*/}
                        {/*            key={circle}*/}
                        {/*            x={coordinates.x}*/}
                        {/*            y={coordinates.y}*/}
                        {/*        />*/}
                        {/*    </>)*/}
                        {/*    : null}*/}
                    </RippleStyled>
                    {text}
                </ButtonStyled>
                : <AStyled href={href} onClick={(e) => onClickHandler(e)}>
                    <RippleStyled>
                        {/*{isShow && <CircleStyled x={coordinates.x} y={coordinates.y}/>}*/}
                        {/*{circles.length*/}
                        {/*    ? circles.map(circle => <>*/}
                        {/*        <CircleStyled*/}
                        {/*            key={circle}*/}
                        {/*            x={coordinates.x}*/}
                        {/*            y={coordinates.y}*/}
                        {/*        />*/}
                        {/*    </>)*/}
                        {/*    : null}*/}
                    </RippleStyled>
                    {text}
                </AStyled>
            }
        </>

    );
};