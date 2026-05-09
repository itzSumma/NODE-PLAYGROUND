"use client";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const CreateNewUser = () => {
const onSubmit =async(event)=>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
const newUsers = Object.fromEntries(formData.entries());
    console.log("newUsers data", newUsers);


}
 
    return (
        <div className="container mx-auto flex flex-col items-center justify-center">
            <h2 className="my-5 text-3xl text-center">Create New User</h2>
            <Form className="w-full max-w-96" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="you@example.com" />
            <FieldError />
          </TextField>
          
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
            Create User
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default CreateNewUser;