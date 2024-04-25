import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personAction";
import Loading from "./Loading";
const PersonDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  console.log(info);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(pathname);
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? <div>PersonDetails</div> : <Loading />;
};

export default PersonDetails;
