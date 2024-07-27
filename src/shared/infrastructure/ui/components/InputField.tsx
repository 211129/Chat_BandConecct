import {DimensionValue, StyleSheet, TextInput} from 'react-native';

type InputFieldProps = {
  width: DimensionValue;
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  handleChange: (text: string) => void;
};

const InputField = ({
  value,
  width,
  placeholder,
  secureTextEntry,
  handleChange,
}: InputFieldProps) => {
  return (
    <TextInput
      style={[styles.input, {width}]}
      placeholder={placeholder}
      placeholderTextColor="#000000"
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={handleChange}
      selectionColor={'#000000'}
    />
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  input: {
    height: 45,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000',
  },
});

export default InputField;
