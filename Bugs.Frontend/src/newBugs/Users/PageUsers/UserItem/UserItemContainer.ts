import {connect} from "react-redux";
import {AnyAction, Dispatch} from "redux";
import {push} from "connected-react-router";

import {Reducers} from "@reducers";
import {urls} from "@core/App/PageComponentRouter";

import {UserItem, IUserItemProps, IUserItemCallProps} from "./UserItem";

const mapStateToProps = (state: Reducers, ownProps: IUserItemProps): IUserItemProps => {
    return {
        user: ownProps.user,
        userProperties: ownProps.userProperties
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: IUserItemCallProps): IUserItemCallProps => {
    return {
        openUser: (userId: number) => dispatch(push(urls.editUserLink(userId)))
    };
};

export const UserItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserItem);