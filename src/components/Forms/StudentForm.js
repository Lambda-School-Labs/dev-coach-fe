import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import {
  FormControl,
  Select,
  InputLabel,
  withStyles,
  makeStyles,
  lighten,
  MenuItem,
  Button,
  InputBase,
  TextField,
  Box,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { StyledButton, buttonTheme, Logo } from '../Landing';
import { chooseUserRole } from '../../state/actions/authenticationActions';
import {
  GreyBackgroundContainer,
  FormCard,
  FormContainer,
} from './LoginForm';
import { countries } from './countries';

const NavLogo = styled(Logo)`
  a {
    width: 1.5rem;
    height: 1rem;
  }
`;

const StyledError = styled.p`
  padding: 0;
  margin: 0;
  color: red;
  font-size: 0.8rem;
`;

const ThisGreyBackgroundContainer = styled(GreyBackgroundContainer)`
  /* fonts should be global
  font-family: ABeeZee;
   */
`;

const StudentCard = styled(FormCard)`
  height: 85%;
  display: flex;
  width: 50%;
  h1 {
    margin: 0;
    margin-top: -0.2em;
    margin-bottom: 0.1em;
  }
`;

const StudentFormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -4em;
`;

const FormButton = styled(StyledButton)`
  width: 50% !important;
  margin-top: 2em;
`;

const InfoParagraph = styled.p`
  width: 85%;
  text-align: center;
  padding-bottom: 0.8em;
`;

const useStyles = makeStyles(theme => ({
  progress: {
    transition: 'width 2s',
  },
  formControl: {
    width: 600,
  },
  textField: {
    width: 600,
    marginTop: '0.6em',
    marginBottom: '0.3em',
  },
  box: {
    '& > *': {
      marginTop: '0.3em',
      marginBottom: '0.3em',
    },
  },
}));

const StudentForm = props => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    userLocation: '',
    experience: '',
    confidence: '',
    github: '',
    linkedin: '',
  });
  const handleFormChange = event =>
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  const handleFormSubmit = event => console.log(formValues);
  return (
    <div>
      <ThisGreyBackgroundContainer>
        <StudentCard>
          <Link to='/userrole'>
            <NavLogo />
          </Link>
          <h1>Get started</h1>
          <InfoParagraph>
            Get started by letting us know where you're based, and
            your background in coding. We'll use this information to
            make sure you end up matched with the coach you need.
          </InfoParagraph>
          <StudentFormContainer>
            <Box
              className={classes.box}
              display='flex'
              flexDirection='column'
              justifyContent='space-evenly'
              alignItems='center'
            >
              <FormControl className={classes.formControl}>
                <Autocomplete
                  name='location'
                  options={countries}
                  getOptionLabel={option => option.name}
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      userLocation: event.target.innerText,
                    })
                  }
                  renderInput={params => (
                    <TextField
                      name='location'
                      {...params}
                      label='Select your location'
                      fullWidth
                    />
                  )}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel>Experience</InputLabel>
                <Select
                  placeholder='experience'
                  displayEmpty
                  className={classes.selectEmpty}
                  name='experience'
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      experience: event.target.value,
                    })
                  }
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>
                    I've taken some online courses
                  </MenuItem>
                  <MenuItem value={2}>
                    I've completed a number of tutorials and built
                    some personal projects
                  </MenuItem>
                  <MenuItem value={3}>
                    I've completed a coding bootcamp or similar
                    program
                  </MenuItem>
                  <MenuItem value={4}>
                    I've completed a CS undergraduate degree
                  </MenuItem>
                  <MenuItem value={5}>
                    I'm a professional software developer
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel>Confidence</InputLabel>
                <Select
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      confidence: event.target.value,
                    })
                  }
                >
                  <MenuItem value={1}>
                    I'm not very confident in my ability to interview
                    successfully
                  </MenuItem>
                  <MenuItem value={2}>
                    I'm not as confident at interviewing as I'd like
                    to be
                  </MenuItem>
                  <MenuItem value={3}>
                    I'm not confident, but not unconfident either
                  </MenuItem>
                  <MenuItem value={4}>
                    I'm pretty confident in my interview ability
                  </MenuItem>
                  <MenuItem value={5}>
                    I'm completely confident at interviewing
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <TextField
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      github: event.target.value,
                    })
                  }
                  placeholder='Link to your GitHub profile (optional)'
                  className={classes.textField}
                />
              </FormControl>
              <FormControl>
                <TextField
                  onChange={event =>
                    setFormValues({
                      ...formValues,
                      linkedin: event.target.value,
                    })
                  }
                  placeholder='Link to your LinkedIn profile (optional)'
                  className={classes.textField}
                />
              </FormControl>
            </Box>
            <FormButton
              theme={buttonTheme}
              onClick={() => props.chooseUserRole(props, formValues, 1)}
            >
              Submit
            </FormButton>
          </StudentFormContainer>
        </StudentCard>
      </ThisGreyBackgroundContainer>
    </div>
  );
};

/* const StudentForm = ({ touched, errors, isSubmitting }) => {
  return (
    <div>
      <ThisGreyBackgroundContainer>
        <FormCard>
          <Link to='/userrole'>
            <NavLogo />
          </Link>
          <h1>Student Form</h1>
          <FormContainer>
            <Form>
              <div>
                <Field
                  type='text'
                  name='userLocation'
                  placeholder='Location'
                />
                {errors.userLocation && touched.userLocation && (
                  <StyledError>{errors.userLocation}</StyledError>
                )}
              </div>
              <div>
                <Field
                  type='text'
                  name='experience'
                  placeholder='Select Level Of Experience'
                />
                {errors.experience && touched.experience && (
                  <StyledError>{errors.experience}</StyledError>
                )}
              </div>
              <div>
                <Field
                  type='text'
                  name='confidence'
                  placeholder='Select Confidence Level'
                />
                {errors.confidence && touched.confidence && (
                  <StyledError>{errors.confidence}</id>
                )}
              </div>
              <div>
                <StyledButton
                  type='submit'
                  disabled={isSubmitting}
                  theme={buttonTheme}
                >
                  Submit
                </StyledButton>
              </div>
            </Form>
          </FormContainer>
        </FormCard>
      </ThisGreyBackgroundContainer>
    </div>
  );
};

const FormikStudentForm = withFormik({
  mapPropsToValues({ userLocation, experience, confidence }) {
    return {
      userLocation: userLocation || '',
      experience: experience || '',
      confidence: confidence || '',
    };
  },
  validationSchema: Yup.object().shape({
    userLocation: Yup.string().required('Please enter a location'),
    experience: Yup.string().required(
      'Please enter Your experience level',
    ),
    confidence: Yup.string().required(
      'Please enter your confidence level',
    ),
  }),
  handleSubmit(values, { resetForm, setSubmitting, props }) {
    resetForm();
    setSubmitting(false);
    props.chooseUserRole(props, values, 1);
  },
})(StudentForm);

export default connect(state => state, {
  chooseUserRole,
})(FormikStudentForm); */

export default connect(state => state, { chooseUserRole })(
  StudentForm,
);
