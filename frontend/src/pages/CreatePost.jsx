import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/api";
import Button from "../components/Button";
import Field from "../components/Field";
import Form from "../components/Form";
import TextAreaField from "../components/TextAreaField";

const CreatePost = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: formRef.current.title.value,
      content: formRef.current.content.value,
      author: formRef.current.author.value,
    };
    createPost(data).then(() => {
      formRef.current.reset();
      navigate("/auth/posts");
    });
  };

  return (
    <Form
      className="max-w-lg mx-auto mt-32 p-10 rounded-lg bg-white shadow-md"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-indigo-700 mb-5">Add Post</h2>
      <Field name="title" label="Title" placeholder="Awesome title" />
      <TextAreaField name="content" label="Content" placeholder="Write here" />
      <Field name="author" label="Author" placeholder="Who's writing" />
      <div className="mt-7 flex space-x-2 justify-end">
        <Button type="submit">Submit</Button>
        <Button color="danger" type="reset">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default CreatePost;
