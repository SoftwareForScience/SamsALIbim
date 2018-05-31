
import { Sams } from "../lib/SAMS/Sams";
import { SamsSettings } from "../lib/SAMS/SamsSettings";

describe("Hello function", () => {
    it("should return hello world", () => {
      const mySams: Sams = new Sams(new SamsSettings("token", "url", 1, 1, "user", "name"), undefined);

    });
  });
