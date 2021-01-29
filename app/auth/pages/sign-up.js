import * as React from 'react'
import { useRouter, useMutation } from "blitz";
import { useForm } from 'react-hook-form'
import PublicLayout from "app/layouts/PublicLayout";
import signup from "../../auth/mutations/signup";
import candidate from '../../auth/mutations/candidates'
import company from '../../auth/mutations/companies'
import recruiter from '../../auth/mutations/recruiters'
import match from '../../auth/mutations/matches'
import keyword from '../../auth/mutations/keywords'
import vacancy from '../../auth/mutations/vacancies'

const SignupPage = () => {
  const [signupMutation] = useMutation(signup);
  const [candidateMutation] = useMutation(candidate);
  const [companyMutation] = useMutation(company);
  const [matchMutation] = useMutation(match);
  const [vacancyMutation] = useMutation(vacancy);
  const [keywordsMutation] = useMutation(keyword);
  const [recruitersMutation] = useMutation(recruiter);

  const { register, handleSubmit, errors } = useForm();


  const onSubmit = async (data) => {
    try {
      await signupMutation(data);
    } catch (error) {
      console.error(error)
    }
  }
  console.log(errors);
  const router = useRouter();
  return (
    <div>
      <main className="signup-page">
        <div className="signup-form">
          <h1>Create an Account</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
            <input type="password" placeholder="Password" name="password" ref={register} />
            <select name="role" ref={register}>
              <option value="CANDIDATE">Candidate</option>
              <option value="RECRUITER">Employer</option>
            </select>
            <input type="submit" />
          </form>
          <p>Already have an account? Sign In</p>
          <p>See our Terms and Conditions</p>
        </div>
      </main>
      <style jsx>{`
        .signup-page {
          height: 94vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

        }
        .signup-form {
          padding: 0 20px;
          background-color: #262626;
          border-radius: 12px;
          height: 45%;
          width: 25%;
          min-height: 400px;
          min-width: 340px;
        }
        .signup-form p {
          padding: 0 20px;
        }
        .form {
          margin: 0 30px;
          display: flex;
          flex-direction: column;
        }

        .form input[type="text"] {
          margin: 10px 0;
          height: 40px;
          border-style: none;
          border-radius: 5px;
        }
        .form input[type="password"] {
          margin: 10px 0;
          height: 40px;
          border-style: none;
          border-radius: 5px;
        }
        .form select {
          width: 30%;
          margin: 10px 0;
          height: 35px;
        }
        .form input[type=submit] {
          margin: 10px 0;
          height: 40px;
          width: 80px;
          background-color: #8C50FF;
          color: white;
          border-style: none;
          border-radius: 6px;
        }
      `}</style>
    </div>

  )
};

SignupPage.getLayout = page => <PublicLayout title="Sign Up">{page}</PublicLayout>;

export default SignupPage;
{/* <div>
    <SignupForm onSuccess={() => router.push("/")} /> 
  </div>; */}