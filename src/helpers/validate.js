export default ({ isAuth, values, errors }) => {
    const rules = {
      email: value => {
        if (!value) {
          errors.email = "Введите E-Mail";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          errors.email = "Введите корректный E-Mail";
        }
      },
      password: value => {          
        if (!value) {
          errors.password = "Введите пароль";
        } else if (            
          !isAuth &&
          !/^(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(value)
        ) {            
          errors.password = "Слишком лёгкий пароль";
        }
      },        
    };
  
    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
  };