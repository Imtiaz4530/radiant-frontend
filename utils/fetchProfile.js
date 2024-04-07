import instance from "./axios";

export const createProfile = async (name, phone, address, userId) => {
  const res = await instance.post("/api/profiles", {
    data: {
      name: name,
      phone: phone,
      address: address,
      users_permissions_user: userId,
    },
  });

  return res?.data;
};

export const fetchProfile = async () => {
  const res = await instance.post("/graphql", {
    query: `
          query{
            profiles{
              data{
                id
                attributes{ 
                name
                phone
                  address
                  users_permissions_user{
                    data{
                      id
                      attributes{
                        username
                        email
                      }
                    }
                  }
                }
              }
            }
            }
                  `,
  });

  return res.data?.data;
};
