import CompanySelector from "../features/onboarding/components/CompanySelector";
import JobSelector from "../features/onboarding/components/JobSelector";

export default function OnboardingPage() {
  return (
    <section className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">온보딩</h1>
        <p className="text-sm text-slate-600">
          시작을 위해 회사를 선택하고 직무를 설정하세요.
        </p>
      </header>
      <CompanySelector />
      <JobSelector />
    </section>
  );
}
