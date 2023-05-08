import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectedListComponent from "./SelectedListComponent";
import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm({submitButtonLabel,onCancel, onSubmit, defaultValues}) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString().slice(0,10) : "",
    description: defaultValues ? defaultValues.description : "",
    category: defaultValues ? defaultValues.category : "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  
  function submitHandler (){
    const expenseData ={
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
      category: inputValues.category,
    };
    onSubmit(expenseData)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <Input
        style={styles.input}
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: inputChangedHandler.bind(this, "amount"),
          value: inputValues.amount,
        }}
      />
      <Input
        style={styles.input}
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputChangedHandler.bind(this, "date"),
          value: inputValues.date,
        }}
      />
      <Input
        style={styles.input}
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <SelectedListComponent
        style={styles.input}
        label="Category"
        category={inputValues.category}
        onSelectedChange={(category) => {
          setInputValues((prevState) => ({
            ...prevState,
            category: category,
          }));
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginVertical: 24,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 32,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});
