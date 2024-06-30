interface BorderProps {
  focused?: boolean;
  error?: string;
  value: string;
}

const borderStyle = {
  error: '#CB3135',
  default: '#99A2AB',
  border: '#777777',
};
export const getBorderStyle = (props: BorderProps) => {
  if (props.error) {
    return borderStyle.error;
  } else if (props.value) {
    return borderStyle.default;
  } else {
    return borderStyle.border;
  }
};
