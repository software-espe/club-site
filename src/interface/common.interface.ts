export type role = 'candidate' | 'member' | 'vetus' | 'venator';

export type emailStatus = 'verified' | 'unverified' | 'banned';

export interface customClaims {
  role: role | undefined;
  status: emailStatus;
}
