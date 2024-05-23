import React from 'react'
import { createUseStyles } from "react-jss";
import { Classes } from 'jss'

interface LoadingPropsInterface {
  size: number;
  unit: string;
}

const outerSpinnerClass = {
    width: '80%',
    height: '80%',
    animation: '$loadingRings 1s infinite 1s',
  },
  middleSpinnerClass = {
    width: '60%',
    height: '60%',
    animation: '$loadingRings 1.5s infinite .5s',
  },
  innerSpinnerClass = {
    width: '40%',
    height: '40%',
    animation: '$loadingRings 2s infinite',
  },
  stylesObject = {
    spinner: ({ size, unit }: LoadingPropsInterface) => ({
      borderRadius: "25px",
      margin: "auto",
      position: "relative",
      width: String(size) + unit,
      height: String(size) + unit,
    }),
    '@keyframes loadingRings': {
      from: {
        transform: 'rotate(0deg) rotateZ(-45deg)',
      },
      to: {
        transform: 'rotate(360deg) rotateZ(-45deg)'
      }
    },
    spinnerClass: ({ size, unit }: LoadingPropsInterface) => ({
      position: 'absolute',
      borderRadius: '100%',
      border: String(size/25) + unit + ' solid transparent',
      borderBottomColor: 'var(--primary)',
      borderRightColor: 'var(--primary)',
    }),
    spinnerOuter: outerSpinnerClass,
    spinnerMiddle: middleSpinnerClass,
    spinnerInner: innerSpinnerClass,
  },
  useStyles: (data: LoadingPropsInterface) => Classes = createUseStyles(stylesObject),
  Loading: React.FC<LoadingPropsInterface> = props => {
    const styles = useStyles(props);
    return (
      <div className="absolute w-full h-full left-0 top-0 flex justify-center items-center">
        <h1 className={`${styles.spinner} flex justify-center items-center`}>
          <div className={`${styles.spinnerOuter} ${styles.spinnerClass}`}></div>
          <div className={`${styles.spinnerMiddle} ${styles.spinnerClass}`}></div>
          <div className={`${styles.spinnerInner} ${styles.spinnerClass}`}></div>
        </h1>
      </div>
    )
  };
export default Loading;
