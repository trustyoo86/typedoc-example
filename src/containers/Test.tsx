import React from 'react';

/** container props */
interface IProps {
  /** container text */
  text?: string;
}

/**
 * @component TestContainer
 * {@link IProps | props interface }
 * @param text container string
 * @returns {JSX.Element} react node element
 */
function TestContainer({ text }: IProps): JSX.Element {
  return (
    <div>
      {text}
      Test container
    </div>
  );
}

export default TestContainer;
