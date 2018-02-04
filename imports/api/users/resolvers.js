
export default {
  Query: {
    user: (obj, args, {user}) => {
      const { _id, emails, profile } = user;
      return {
        _id,
        email: emails[0].address,
        avatar: profile.avatar,
      }
    }
  }
}
