import React from "react";
import { IMaskInput } from "react-imask";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustomBirthday = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, ref) {
      const { onChange, ...other } = props;
      return (
        <IMaskInput
        {...other}
            mask="00/00/0000"
            definitions={{
              '#': /[1-9]/,
            }}
            onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
            overwrite
            />
            );
          },
          );
  export default TextMaskCustomBirthday;