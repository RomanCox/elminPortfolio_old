import {
    TitleH1Styled,
    TitleH2Styled,
    TitleH3Styled,
    TitleH4Styled,
    TitleH5Styled,
    TitleH6Styled,
} from './Title.styled.ts';

export type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TitlePropsType = {
    variant: VariantType,
    text: string,
    color: string,
}

export const Title = ({variant, text, color}: TitlePropsType) => {

    return (
        <>
            {variant === 'h1'
                ? <TitleH1Styled color={color}>{text}</TitleH1Styled>
                : variant === 'h2'
                    ? <TitleH2Styled color={color}>{text}</TitleH2Styled>
                    : variant === 'h3'
                        ? <TitleH3Styled color={color}>{text}</TitleH3Styled>
                        : variant === 'h4'
                            ? <TitleH4Styled color={color}>{text}</TitleH4Styled>
                            : variant === 'h5'
                                ? <TitleH5Styled color={color}>{text}</TitleH5Styled>
                                : <TitleH6Styled color={color}>{text}</TitleH6Styled>
            }
        </>
    );
};