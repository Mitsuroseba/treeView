const apiData = [
  { name: "Acme Inc", country: "Canada" },
  { name: "Wayne Corp", country: "Bahrain",
    subsidiaries: ["Cave Enterprises", "Bats Unlimited"] },
  { name: "Cave Enterprises", country: "Austria" },
  { name: "Bats Unlimited", country: "Japan",
    subsidiaries: ["Globex Corp"] },
  { name: "Globex Corp", country: "Kuwait" },
]

// TODO: Add API calls here.
export async function fetchOrganizations (): Promise<{ data: Organization[] }> {
  return await new Promise<{ data: Organization[] }>((resolve) =>
    setTimeout(() => { resolve({ data: apiData }) }, 700)
  )
}
