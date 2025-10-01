import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TransitionNav({ href, children, ...props }: any) {
  const router = useTransitionRouter();
  const pathname = usePathname();

  function triggerPageTransition() {
    document.documentElement.animate(
      [
        {
          clipPath:
            "polygon(20.55% 25%, 77.5% 25%, 77.5% 60.33%, 20.55% 60.33%)",
        },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.9, 0, 0.1, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleNav = (path: string) => (e: React.MouseEvent) => {
    if (path === pathname) {
      e.preventDefault();
      return;
    }

    router.push(path, {
      onTransitionReady: triggerPageTransition,
    });
  };
  return (
    <>
      <Link href={href} onClick={handleNav(href)} {...props}>
        {children}
      </Link>
    </>
  );
}
