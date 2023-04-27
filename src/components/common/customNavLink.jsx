import { NavLink, useParams } from 'react-router-dom';

function CustomNavLink({to, childeren}) {
  const {id} = useParams();
    console.log(id);
    let linkTo = "";
  if(id){
    linkTo = `/movie/${id}`;
  }else{
    linkTo = '/movie/tt0978759';
  }

  return (
    <NavLink exact={to === '/'} to={linkTo} activeClassName="active">
      {childeren}
    </NavLink>
  );
}

export default CustomNavLink;